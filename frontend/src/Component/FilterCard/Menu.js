import React from 'react'

function Menu({menuItem}) {
    return (         <>
        {menuItem !== undefined ? (
            <>
        <div className="item">
            { 
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt={item.subtitle} width="300" height="300"/>
                           <div class="itemContent"> <h5>{item.title}</h5>
                            <h2>{item.subtitle}</h2> </div>
                        </div>
                    </div>
                })
            }
        </div> </>
    ) : menuItem === "undefined" ? (
      <p>Loading...</p>
    ) : (
      <p class="error">Unexpected error occured while listing menu items...</p>
    )}</>
    )
}

export default Menu;
