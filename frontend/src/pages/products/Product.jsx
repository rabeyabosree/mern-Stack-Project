import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const id = useParams();
  const {products , currency} = useContext('');
  const [first, setFirst] = useState('')
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              {

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product