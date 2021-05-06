const Content = () => {
    return(
        
        <header  className='container px-3 pb-1 col-md-12 border-bottom border-secondary bg-green border-5 '> 
            
        <div className="row"> 
            <div className="border-3 border-solid col-md-8 p-3 bg-lime">
     
            <h1 className="text-center"><strong> Welcome</strong></h1>
	    	<p className="p-3"> Welcome to our fake birdwatching site. If this were a real site, 
            it could be the ideal place to come to learn more about birdwatching whether you are 
            a beginner looking to learn how to get into birding,or an expert wanting to share ideas, 
            tips, and photos with other like-minded people </p> 
            <p className="p-3"> So don't waste time! Get what you need, then turn off that computer 
            and get out into the great outdoors!</p></div>

            <div className=" border-3 border-solid col-md-4 p-3 bg-lime">    
 
            <h2 className="text-center"> <strong>Features Photos</strong></h2>
            <a href="./eagle.jpg"><img src='./eagle.jpg' width='160'  alt ="" /></a>      
            <a href="./falcon.jpg"><img src='./falcon.jpg' width='170' height='160' alt ="" /></a>      
            <a href="./owl.jpg"><img src='./owl.jpg' width='160'  alt ="" /></a>      
            <a href="./parrot.jpg"><img src='./parrot.jpg' width='170' height='160' alt ="" /></a>      
     
        </div></div>
        </header>
        )
}
export default Content