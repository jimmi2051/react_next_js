import { withRouter } from 'next/router'
import Layout from '../components/my_layout'

const Content = withRouter(props => (
    <div>
      <h1>{props.router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))
  
  const Page = props => (
    <Layout>
      <Content />
    </Layout>
  )
  
  export default Page