import React from 'react';

const Blog = () => {
    return (
        <div className='my-container border mt-10'>
            <h1 className='font-bold text-center text-5xl mb-10'>BlogQuestion</h1>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>A. When should you use context API?</h3>
                <p>When we have data or state that has to be shared across different components in a React application, utilize the Context API.It is especially useful when passing props down via numerous levels of nested components gets tedious.Context can also help to reduce the requirement for prop drilling, which occurs when props are transmitted down via numerous tiers of components.Another reason to utilize the Context API is to construct a theme or language switcher that affects numerous components at the same time.Finally, it may be used to maintain the state of a complicated application without the need for a state management framework such as Redux.</p>
            </div>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>B. What is a custom hook?</h3>
                <p>In React, a custom hook is a function that enables we to reuse functionality across different components.It is a method of extracting reusable functionality from a component and sharing and reusing it across different components.Custom hooks begin with the prefix 'use' and can contain other hooks or any other shared logic.They adhere to the same guidelines as React's built-in hooks like useEffect and useState.By separating concerns and supporting modularity, custom hooks can help to keep your code tidy, maintainable, and reusable.</p>
            </div>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>C. What is useRef?</h3>
                <p>useRef is a React hook that allows we to build a mutable object that persists across component renders.It can be used to refer to a DOM element, to store a prior value, or to store any mutable data that has to be persistent between views.The useRef method returns a ref object that can be added to a JSX element using the ref property.The ref object has a current attribute that can be modified without causing the component to re-render.useRef may be used to access or modify the state or props of a child component without passing them down through props.</p>
            </div>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>D .What is useMemo?</h3>
                <p>useMemo is a React hook that can be used to maximize speed by memoizing a value, which means that the value is only recomputed when the dependencies change.It accepts a function and an array of dependencies as parameters and returns a memoized value.UseMemo returns the value that was previously computed if the dependencies have not changed.When a component renders frequently yet has an expensive calculation or when a computationally expensive function is regularly used, it can be helpful.we can reduce the need for pointless re-renders and enhance efficiency by memoizing the value.</p>
            </div>



        </div>
    );
};

export default Blog;