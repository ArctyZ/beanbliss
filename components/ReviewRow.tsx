import ReviewCard from "./ReviewCard"



const reviewList : {name: string, title: string, review: string}[] = [
    {
        name: 'John Doe',
        title: 'Delicious',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum aliquid dolor quos perferendis architecto quia placeat? Modi quo eius distinctio doloribus, officia nisi magni earum, aperiam excepturi voluptates consequuntur?'
    },
    {
        name: 'John Doe',
        title: 'Delicious',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum aliquid dolor quos perferendis architecto quia placeat? Modi quo eius distinctio doloribus, officia nisi magni earum, aperiam excepturi voluptates consequuntur?'
    },
    {
        name: 'John Doe',
        title: 'Delicious',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum aliquid dolor quos perferendis architecto quia placeat? Modi quo eius distinctio doloribus, officia nisi magni earum, aperiam excepturi voluptates consequuntur?'
    },
]

export default function ReviewRow() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-3 justify-items-stretch items-center mx-auto mb-5 mt-10 max-w-7xl px-4 py-4 md:px-8 gap-4">
        {reviewList.map((review, i) => {
            return <ReviewCard key={i} {...review}/>
        })}
    </div>
  )
}
