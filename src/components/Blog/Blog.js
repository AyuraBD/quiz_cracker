import React from 'react';
import Footer from '../Footer/Footer';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-header">
                        <h3>Some questions are here.</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-1: What is the purpose of of react router?</h3>
                            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                            <p>Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-2: How does context API Works? </h3>
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                            <p>It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="q-one">
                            <h3> Q-3: What is useRef hook in React? </h3>
                            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

                            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blog;