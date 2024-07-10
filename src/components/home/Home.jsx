import "./Home.css"
import Navbar from "../navbar/Navbar"

export default function Home() {
  return (
  <article className="Home">
    <div className="draw"></div>
    <header>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio itaque veritatis! Modi, impedit fuga? Dolorum non tempore ipsa itaque iusto ut, exercitationem, praesentium aspernatur nihil deserunt possimus est temporibus.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio itaque veritatis! Modi, impedit fuga? Dolorum non tempore ipsa itaque iusto ut, exercitationem, praesentium aspernatur nihil deserunt possimus est temporibus.</p>
    </header>

    {/* <div className="gap"></div> */}

    <section>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio itaque veritatis! Modi, impedit fuga? Dolorum non tempore ipsa itaque iusto ut, exercitationem, praesentium aspernatur nihil deserunt possimus est temporibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio itaque veritatis! Modi, impedit fuga? Dolorum non tempore ipsa itaque iusto ut, exercitationem, praesentium aspernatur nihil deserunt possimus est temporibus.</p>
    </section>
    <Navbar/>
  </article >)
}
