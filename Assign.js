 let blocks = [
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
    "gym": false,
    "school": true,
    "store": true,
    }
    ]

  for(let i=0;i<blocks.length;i++)
    {
    
     if(i==0)
     {
        if(blocks[i].gym===true || blocks[i+1].gym===true)
        {
            if(blocks[i].school===true || blocks[i+1].school===true)

            {
                if(blocks[i].store===true || blocks[i+1].store===true)
                {
                    console.log(i);
                }
            }
             
        }
        

    }
    else if(i<blocks.length-1)
    {
        if(blocks[i].gym===true || blocks[i+1].gym===true ||  blocks[i-1].gym===true)
        {
            if(blocks[i].school===true || blocks[i+1].school===true|| blocks[i-1].school===true)

            {
                if(blocks[i].store===true || blocks[i+1].store===true|| blocks[i-1].store===true)
                {
                    console.log(i);
                }
            }
             
        }
    }
    else
    {
        if(blocks[i].gym===true || blocks[i-1].gym===true)
        {
            if(blocks[i].school===true || blocks[i-1].school===true)

            {
                if(blocks[i].store===true || blocks[i-1].store===true)
                {
                    console.log(i);
                }
            }
             
        }  
    }
    }
