

export const Header = () => {
  return (
    <>
    
    <header className="showcase">
			<div className="container">
				<nav>
					<img className="logo" 
					alt="logo"
					src="/logo.webp"/>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>
					</ul>
				</nav>

				<div className="showcase-content">
					<div>
						<h1>Welcome to My Website</h1>
						<p className="my-1">
						Select the country and view links to universities.
						By clicking on the links you can visit the website.
						</p>
						<a href="#" className="btn-primary">Learn More</a>
						<a href="#" className="btn-secondary">Sign Up</a>
					</div>
					<img
						
					/>
				</div>
			</div>
		</header>
        </>
  )
}
