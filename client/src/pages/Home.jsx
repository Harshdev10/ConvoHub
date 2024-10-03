import AppLayout from "../components/layout/AppLayout"


const Home = () => {
  return (
    <div>Home</div>
  )
}

const NamedHome = AppLayout()(Home);
export default NamedHome;