// import React from "react";
// import PageDetail from "~/component/PageDetail";

// export default function DetailPage() {
//   return <PageDetail />;
// }
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {
  ActionFunction,
  Link,
  LoaderFunction,
  MetaFunction,
  redirect,
  useCatch
} from "remix";
import invariant from "tiny-invariant";
// import { addComment } from "~/api/comments";
import { getFilmDetail } from "~/api/movie";
import Footer from "~/common/Footer";
import Header from "~/common/Header";
// import CommentsList from "~/components/CommentList";
import PageDetail from "~/containers/PageDetail";
export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.aliasName,
    description: data.name,
    image: data.coverHorizontalUrl,
  };
};

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.name, "expected params.name");
  const url = new URL(request.url);
  const cateId = url.searchParams.get("cate");
  // const body = await request.formData();

  //   const comment: any = {
  //     name: body.get("name") as string,
  //     comment: body.get("comment") as string,
  //     filmId: params.name,
  //     cateId,
  //   };
  //   console.log("comment", comment);

  //   const errors = { name: "", comment: "" };

  //   if (!comment.name) {
  //     errors.name = "Vui lòng nhập tên của bạn";
  //   }

  //   if (!comment.comment) {
  //     errors.comment = "Vui lòng nhập bình luận";
  //   }

  //   if (errors.name || errors.comment) {
  //     const values = Object.fromEntries(body);
  //     return { errors, values };
  //   }

  //   // await addComment(comment);

  return redirect(`/movie/detail/${params.name}?cate=${cateId}`);
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const cate = url.searchParams.get("cate");
  invariant(params?.name, "expected params.name");
  const name = params?.name;

  const dataDetail = await getFilmDetail(name, cate);

  return dataDetail;
};

export default function index() {

  return (
    <>
      <Header />
      <PageDetail />
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: any) {
  return (
    <Grid
      container
      justifyContent="center"
      style={{ position: "absolute", top: "50%", color: "white" }}
    >
      <Box>
        <Typography variant="h5" color="initial" paragraph>
          Xin thông báo
        </Typography>
        <Typography color="initial" paragraph>
          Uh oh... Xin lỗi, đã có lỗi xảy ra!
        </Typography>
        <Typography variant="body1" color="initial" paragraph>
          {error?.message}
        </Typography>
        <Typography variant="body1" color="initial">
          Nhấn vào
          <Link to="/movie">
            <span> đây </span>
          </Link>
          để trở về trang chủ
        </Typography>
      </Box>
    </Grid>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <Grid
        container
        justifyContent="center"
        style={{ position: "absolute", top: "50%", color: "white" }}
      >
        <Box>
          <Typography variant="h5" color="initial" paragraph>
            Xin thông báo
          </Typography>
          <Typography variant="body1" color="initial" paragraph>
            Không tìm thấy trang này!
          </Typography>
          <Typography variant="body1" color="initial" paragraph>
            {caught.status} {caught.statusText}
          </Typography>
          <Typography variant="body1" color="initial">
            Nhấn vào
            <Link to="/movie">
              <span> đây </span>
            </Link>
            để trở về trang chủ
          </Typography>
        </Box>
      </Grid>
    );
  }

  throw new Error("Unkown error");
}
