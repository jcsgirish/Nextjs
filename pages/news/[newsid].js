
import {useRouter} from 'next/router';


//our-domain.com/news/something-important

function Detailpage(){

    const  router =useRouter()

    const newsid = router.query.newsid

    return <h1>The Girish</h1>
}

export default Detailpage