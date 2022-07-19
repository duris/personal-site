import { useSession } from "next-auth/react"
import Header from "../components/Header"

function Quote() {
  const { data: session } = useSession()



  if (!session)  {
    return (
      <>      
      <Header />
      <div>Need to login</div>
      </>
    )
  } else if (session) {
    return (
      <>                  
      <div>Logged in</div>
      </>
    )
  }
}

export default Quote