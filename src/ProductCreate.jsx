
import React, { useState } from 'react'

const ProductCreate = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const product = {
      id: Date.now(),
      name: name,
      price: price
    }

    setProducts([...products, product])
    setName('')
    setPrice('')
  }

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border p-2"
          required
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full rounded border p-2"
          min="0"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>

      <h2 className="mb-3 mt-6 text-xl font-bold">
        Product List
      </h2>

      {products.length === 0 && (
        <p className="text-gray-500">No products added yet.</p>
      )}

      {products.map((product) => (
        <div
          key={product.id}
          className="mb-3 rounded border p-3"
        >
          <h3 className="font-bold">{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductCreate