import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              consequatur facere est eaque quas pariatur laudantium. Tempora
              mollitia magnam iure iusto maiores eius sunt in odio! Molestiae
              earum minus sequi! Vel tenetur deserunt, animi dolor et iure odio
              accusamus, perferendis a rerum eius ipsam ipsum possimus incidunt
              cupiditate veniam natus?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
