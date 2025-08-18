import { useState } from 'react';
import { ChevronRight, Grid3X3, Package, ShoppingBag } from 'lucide-react';

const ProfessionalSimpleCategoriesMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: "📱",
      subcategories: [
        {
          id: 11,
          name: "Phones",
          subSubcategories: ["iPhone", "Samsung", "Google Pixel"]
        },
        {
          id: 12,
          name: "Laptops",
          subSubcategories: ["MacBook", "Dell", "HP"]
        },
        {
          id: 13,
          name: "Headphones"
        }
      ]
    },
    {
      id: 2,
      name: "Fashion",
      icon: "👔",
      subcategories: [
        {
          id: 21,
          name: "Men",
          subSubcategories: ["Shirts", "Pants", "Shoes"]
        },
        {
          id: 22,
          name: "Women",
          subSubcategories: ["Dresses", "Tops", "Heels"]
        },
        {
          id: 23,
          name: "Accessories"
        }
      ]
    },
    {
      id: 3,
      name: "Home",
      icon: "🏠",
      subcategories: [
        {
          id: 31,
          name: "Furniture",
          subSubcategories: ["Sofa", "Table", "Chair"]
        },
        {
          id: 32,
          name: "Kitchen"
        }
      ]
    },
    {
      id: 4,
      name: "Sports",
      icon: "🏃‍♂️",
      subcategories: [
        {
          id: 41,
          name: "Fitness",
          subSubcategories: ["Gym Equipment", "Yoga", "Running"]
        }
      ]
    },
    {
      id: 5,
      name: "Books",
      icon: "📚"
    },
    {
      id: 6,
      name: "Health",
      icon: "💊",
      subcategories: [
        {
          id: 61,
          name: "Skincare"
        }
      ]
    },
    {
      id: 7,
      name: "Auto",
      icon: "🚗"
    },
    {
      id: 8,
      name: "Kids",
      icon: "🧸",
      subcategories: [
        {
          id: 81,
          name: "Toys",
          subSubcategories: ["LEGO", "Dolls", "Games"]
        }
      ]
    },
    {
      id: 9,
      name: "Food",
      icon: "🍷"
    },
    {
      id: 10,
      name: "Pets",
      icon: "🐕",
      subcategories: [
        {
          id: 101,
          name: "Dogs"
        }
      ]
    }

    
  ];

  const handleClick = (item, type) => {
    if (type === 'category' && !item.subcategories) {
      window.location.href = `/${item.name.toLowerCase()}-product`;
    } else if (type === 'subcategory' && !item.subSubcategories) {
      window.location.href = `/${item.name.toLowerCase()}-product`;
    } else if (type === 'subsubcategory') {
      window.location.href = `/${item.toLowerCase()}-product`;
    }
  };

  return (
    <div className="flex p-6  min-h-screen "> 
      {/* Main Categories Panel */}
      <div className=" rounded-xl shadow-lg border  w-full ">
        {/* Header */}
        <div className="px-6 py-5  rounded-t-xl">
          <div className="flex items-center space-x-3">
            <Grid3X3 className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">Explore our product collection</p>
        </div>
        
        {/* Categories List */}
        <div className="py-3 h-[660px] overflow-y-scroll hide-scrollbar">
          {categories.map((category) => (
            <div key={category.id} className="relative px-2">
              <div
                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => {
                  setHoveredCategory(category.subcategories ? category.id : null);
                  setHoveredSubCategory(null);
                }}
                onMouseLeave={() => {
                  if (!category.subcategories) {
                    setHoveredCategory(null);
                    setHoveredSubCategory(null);
                  }
                }}
                onClick={() => handleClick(category, 'category')}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium text-gray-700 group-hover:text-blue-700">{category.name}</span>
                </div>
                {category.subcategories && (
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                )}
              </div>

              {/* Subcategories Dropdown */}
              {hoveredCategory === category.id && category.subcategories && (
<div className="absolute top-0 left-[calc(20%+1rem)] z-50 w-64 bg-white border border-gray-200 rounded-xl shadow-xl">

                  {/* Subcategory Header */}
                  <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-xl ">
                    <div className="flex items-center space-x-2">
                      <Package className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-gray-800">{category.name}</h4>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Choose a subcategory</p>
                  </div>
                  
                  {/* Subcategories List */}
                  <div className="py-2">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id}>
                        <div
                          className="mx-2 px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-sm transition-all duration-250 cursor-pointer flex justify-between items-center group"
                          onMouseEnter={() => {
                            setHoveredSubCategory(subcategory.subSubcategories ? subcategory.id : null);
                          }}
                          onClick={() => handleClick(subcategory, 'subcategory')}
                        >
                          <span className="font-medium text-gray-600 group-hover:text-green-700 text-sm">{subcategory.name}</span>
                          {subcategory.subSubcategories && (
                            <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                          )}
                        </div>
                        
                        {/* Sub-subcategories inline dropdown */}
                        {hoveredSubCategory === subcategory.id && subcategory.subSubcategories && (
                          <div className="ml-4 mr-2 mb-2 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-100">
                            <div className="px-3 py-2 border-b border-purple-100">
                              <div className="flex items-center space-x-2">
                                <ShoppingBag className="h-3 w-3 text-purple-600" />
                                <span className="text-xs font-medium text-purple-800">{subcategory.name}</span>
                              </div>
                            </div>
                            <div className="py-1">
                              {subcategory.subSubcategories.map((item, index) => (
                                <div
                                  key={index}
                                  className="mx-2 px-3 py-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer"
                                  onClick={() => handleClick(item, 'subsubcategory')}
                                >
                                  <span className="text-xs font-medium text-gray-600 hover:text-purple-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default ProfessionalSimpleCategoriesMenu;