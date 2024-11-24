import React from 'react';

function NewsletterSignup() {
    return (
        <div className="bg-purple-900 text-white py-12">
            <div className="container px-4">
                <div className="max-w-xl mx-auto text-center space-y-4">
                    <h2 className="text-2xl font-bold">Sign Up For Our Newsletter!</h2>
                    <p className="text-purple-200">Subscribe to our newsletter to get early access to new products</p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow p-2 rounded bg-white text-black"
                        />
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSignup;

