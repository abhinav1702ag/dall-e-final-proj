import React from 'react'
import { useEffect, useState } from 'react'
import { FormField,Loader } from '../components'

const Home = () => {
// const [loading,setLoading] = useState(ture)
// const[allPosts, setAllPosts]= useState(null)
 

  return (
    <section className="max-w-7xl mx-auto">
      <div >
        <h1 className="font-extrabold text-[#222328] text-[32px]">The Gallery</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through the amazing Gallery that is created by DALL-E
        </p>
      </div>
      <div className="mt-16">
        <FormField/>
      </div>
      
      
    </section>
    
  )
}

export default Home


// {searchText && (
//   <h2 className="font-medium text-[#666e75] text-xl mb-3">
//     Showing results for
//     <span className="text-[#222328]">
//       {searchText}

//     </span>
//   </h2>
// )}

// const[searchText,setSearchText] = useState()