//our-domain.com/news

import { Fragment } from "react";
import Link from "next/link"

function Newspage(){

    return  <Fragment>
    <h1>The Newspage</h1>
    <ul>
      <li>
          <Link href="/news/nextjs-framework">Nextjs framework</Link>
      </li>
      <li>React developer </li>
    </ul>
    </Fragment>
}

export default Newspage