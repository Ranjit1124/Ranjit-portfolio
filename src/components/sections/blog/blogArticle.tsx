import BlogSidebar from "./blogSidebar"
import Comments from "./comments"

const BlogArticle = () => {
    return (
        <section className="blog-category section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-8">
                        <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">
                            <img src="/images/blog/blog1.jpg" className="img-responsive" alt='img' />
                            <h2>Create website step by step deatils</h2>
                            <div className="post-date">
                                <span><i className="fa fa-calendar" /> 02,Feb 2017</span>
                                <span><i className="fa fa-calendar" /> website development</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <blockquote>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <h2>Tags</h2>
                            <div className="tag">
                                <a href="#">Web design</a>
                                <a href="#">Web Development</a>
                                <a href="#">Accounting</a>
                            </div>
                            <div className="next-previews-button-design">
                                <a className="pull-left" href="#"><i className="fa fa-chevron-left" /> Previous post</a>
                                <a className="pull-right" href="#">Next post <i className="fa fa-chevron-right" /></a>
                            </div>
                        </div>
                        <Comments />
                    </div>
                   <BlogSidebar/>
                </div>
            </div>
        </section>

    )
}

export default BlogArticle