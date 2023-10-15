import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts} from '../../redux/productSlice'
import Loading from '../Loading'
import Product from './Product'

import {getCategoryProducts} from '../../redux/productSlice'
import ReactPaginate from 'react-paginate'
const Products = ({category,sort}) => {
  const [itemOffset, setItemOffset] = useState(0);

 const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

    const dispatch = useDispatch()
    const {products,productsStatus} = useSelector(state => state.products)
    useEffect(() => {
      if(category){
        dispatch(getProducts(getCategoryProducts(category)))
      }else{
         dispatch(getProducts())
      }
     
    },[dispatch,category])
  return (
    <div>
        {
            productsStatus == "LOADING" ? <Loading/> : 
            <>
            <div className='flex-wrap '>
                {currentItems?.sort((a,b) =>  sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : null)?.map((product,i) => (
                <Product key={i} product={product}/>
                ))}
                </div>
                  <ReactPaginate
                  className='paginate'
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handle}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel=">"
                  renderOnZeroPageCount={null}
                  
                  
                  
                  />

                </>
        }
    </div>
  )
}

export default Products