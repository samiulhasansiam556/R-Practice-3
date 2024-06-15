import React from 'react';
import Class21p1c1 from './Class21p1c1';
import Class21p1c2 from './Class21p1c2';

const isSingin =true;

        // let page;
        
        // if(isSingin){
        //     page = <Class21p1c1/>;
        // }else{
        //     page = <Class21p1c2/>;
        // }

        function Class21p1(props) {


            return (
                <div>
                    
                    {isSingin? <Class21p1c1/> : <Class21p1c2/>}
                    {isSingin && <Class21p1c1/> }


                </div>
            );
        }

export default Class21p1;