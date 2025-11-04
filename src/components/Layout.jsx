import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='pt-15'>
        {children}
      </main>
      <Footer />
    </>
  )
}
