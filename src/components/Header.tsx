import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function Header(){
  
  const { data: session } = useSession()

  if (session)  {
    return(
      <>
      <header className="border">
      <span className="text-green float-left absolute">{session.user?.email} </span>
    <nav className="justify-center flex w-full">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/showcase">Showcase</a></li>
    </nav>            
         <button className=" absolute right-0 hover:bg-slate-100 hover:border-[#f7fcff] 
    font-thin border p-2 m-2 rounded-md" onClick={() => signOut()}>Sign Out</button>
      
      </header>
      </>
    )
  } else {
    return(
      <>
      <header className="border">
        
      <span className="text-green float-left absolute">Not signed in </span>
      <nav className="justify-center flex w-full">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/showcase">Showcase</a></li>
      </nav>
      <div className=" sm:hidden">      
      ---
    </div>
      <button className=" absolute right-0 hover:bg-slate-100 hover:border-[#f7fcff] 
      font-thin border hidden sm:inline p-2 m-2 rounded-md"onClick={() => signIn()}>Sign In</button>

    
    </header>
    </>
    )
  }

}

