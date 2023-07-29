import Layout from '../../components/Layout'
import Card from '../../components/Card'
import {useState, useEffect} from 'react'

function home() {
  const [items, setItems] = useState(null)

  useEffect(()=>{
    fetch('http://openlibrary.org/people/george08/lists/OL97L/seeds.json')
    .then(response => response.json())
    .then(data => setItems(data.entries))
  }, [])
  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map(item => (
          <Card key={item.title} data={item}></Card>
        ))
      }
      </div>
    </Layout>
  )
}

export default home
