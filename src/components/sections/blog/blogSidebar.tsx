const BlogSidebar = () => {
    return (
        <div className="col-md-4 col-sm-4">
            <div className="single-blog-sidebar-area">
                <div className="single-side-bar">
                    <h2>Search</h2>
                    <input type="text" className="form-control" placeholder="Search" />
                    <button>Search</button>
                </div>
                <div className="single-side-bar">
                    <h2>about me</h2>
                    <img src="/images/blog/author.jpg" alt="img" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="single-side-bar">
                    <h2>Catagory lists</h2>
                    <ul>
                        <li><a href="#"> Business planning <span>(5)</span></a></li>
                        <li><a href="#"> CMS Web Templates <span>(3)</span></a></li>
                        <li><a href="#"> Html Templates <span>(6)</span></a></li>
                        <li><a href="#"> Graphics Design <span>(4)</span></a></li>
                        <li><a href="#"> WordPress <span>(8)</span></a></li>
                    </ul>
                </div>
                <div className="single-side-bar">
                    <h2>Tags</h2>
                    <div className="tag">
                        <a href="#">Web design</a>
                        <a href="#">Web Development</a>
                        <a href="#">Accounting</a>
                        <a href="#">Taxation</a>
                        <a href="#">Retirement</a>
                        <a href="#">Financial planning</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar