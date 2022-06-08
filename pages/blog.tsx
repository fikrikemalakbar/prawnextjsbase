import Layout from "../components/Layout"
import Head from "next/head"
import styles from '../styles/Blog.module.css'

interface Post{
  id:number;
  title:string;
  body:string;
}

interface BlogProps{
  dataBlog:  Post[]
}
export default function Blog(props: BlogProps) {
  const {dataBlog} = props;
  return (
  <>
    <Head>
      <title>All Blog Post</title>
      <meta name="description" content="semua artikel blog post" />
    </Head>
    <Layout>
      {dataBlog.map(blog => {
        return(
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        )
      })}
    </Layout>
  </>
  );
}



export async function getServerSideProps(){

  const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();

  return {
    props:{
      dataBlog,
    }
  }
}