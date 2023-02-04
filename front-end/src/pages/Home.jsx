import React from 'react'
import { useEffect, useState } from 'react'
import { FormField, Loader, Card } from '../components'






const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};
const AlertEl=()=>{
  return(
    <div>
      <p>This is the check element</p>
    </div>
  )
}
const RenderScreen = (data)=>{
  if(v.length>0){
    return(
      <AlertEl/>
    )
  }
  else{
    return(
      <p>This is not working </p>
    )
  }
}
// const Card = ({ title, description, image }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       <img src={image} alt={title} className="h-[300px] w-full object-cover" />
//       <div className="p-5">
//         <h2 className="text-[#222328] font-bold text-xl">{title}</h2>
//         <p className="text-[#666e75] mt-3">{description}</p>
//       </div>
//     </div>
//   );
// };



const Home = () => 
{
  
const [loading,setLoading] = useState(false)
const[allPosts, setAllPosts]= useState(null)
const [searchText, setSearchText] = useState('')
const [searchedResults, setSearchedResults] = useState(null)
const [searchTimeOut, setSearchTimeOut] = useState(null)






useEffect(()=>{
const fetchPosts = async () => {
  setLoading(true);

  try {
    const response = await fetch('http://localhost:8080/api/v1/post', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      setAllPosts(result.data.reverse());
     
    }
  } catch (err) {
    alert(err);
  } finally {
    setLoading(false);
  }
};

 fetchPosts();
},[])



const handleSearchChange = (e)=>{
  clearTimeout(searchTimeOut)
  setSearchText(e.target.value);
  setSearchTimeOut(

    setTimeout(()=>{

    const searchResults = allPosts.filter((post)=>
      post.name.toLowerCase().includes(searchText.toLowerCase())||
      post.prompt.toLowerCase().includes(searchText.toLowerCase()))
      
      setSearchedResults(searchResults)
    
  },500)
  
  )
}

  return (
    <section className="max-w-7xl mx-auto">
      <div >
        <h1 className="font-extrabold text-[#222328] text-[32px]">The Gallery</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through the amazing Gallery that is created by DALL-E
        </p>
      </div>
      <div className="mt-16">
        <FormField
        labelName='Search Posts'
        type='text'
        name='text'
        placeholder='Search Posts'
        value={searchText}
        handleChange={handleSearchChange}
        />
      </div>
      
      <div className='mt-10'>
              {loading ?(
                <div className="flex justify-center items-center ">
                  <Loader/>
                </div>
              ):(
                <>
                {searchText && (
                  <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                    Showing results for <span className='text-[#222328]'>{searchText}</span>
                  </h2>
                )}
                <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 '>
                  {searchText ? (
                    <RenderCards data={searchedResults} title="No search results found"/>
                  ):(
                    <RenderCards data={allPosts} title="No posts found"/>
                  )}

                </div>
                
                </>
              )}
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


{/* <div className="mt-10">
        { loading ? (
          <div className="flex justify-center">
           <Loader/>
          </div>
        ):
        (
          <>
          {searchText && (
            <h2 className="font-medium text-[#666] text-xl mb-3">
              Showing results for 
              <span className="text-[#222328]">
                {searchText}
              </span>
            </h2>
          )}
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {searchText ? (
              <RenderCards data={[]} title="No search results found"/>
            )
            :
            (
              <RenderCards data={allPosts} title="No posts found"/>
            )}
          </div>
          </>
        )}
      </div> */}

      // const test = async ()=>{
      //   try {
      //     const response = await fetch('http://localhost:8080/api/v1/post', {
      //       method: 'GET',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     });
      
      //     if (response.ok) {
      //       const result = await response.json();
      //       alert('the data is been set in the use state')
      //       setV(result);
      //       ()=>{console.log(v)}
      //     }
      //   }
      //   catch (error) {
        
      //   }
          
      //   } 
      // const fetchPosts = async () => {
//   setLoading(true);

//   try {
//     const response = await fetch('http://localhost:8080/api/v1/post', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const result = await response.json();
//       setAllPosts(result.data.reverse());
//     }
//   } catch (err) {
//     alert(err);
//   } finally {
//     setLoading(false);
//   }
// };
