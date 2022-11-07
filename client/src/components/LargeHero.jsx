import React from 'react'

const LargeHero = ({name, catogery}) => {
    const ViewOrBook = catogery === "Doctor" ? "View" : "Book"
  return (
    <header>
      <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
        <h1 class="text-5xl font-bold mt-0 mb-4">Hello {name}!</h1>
        <h3 class="text-3xl font-medium mb-4">{ViewOrBook} your appointments below</h3>
        <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                 {ViewOrBook} Here
              </button>
      </div>
    </header>
  )
}

export default LargeHero