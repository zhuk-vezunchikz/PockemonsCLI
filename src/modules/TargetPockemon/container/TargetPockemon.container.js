import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TargetPockemonComponent from "../component/TargetPockemon.component";
import {targetPockemonSelector} from "../selectors/targetPockemon.selectors";
import {getTargetPockemonRequest} from "../actions/targetPockemon.action";


export default ({route, navigation}) => {
    
    const dispatch = useDispatch();
    const targetPockemon = useSelector(targetPockemonSelector);
 
    const {data} = targetPockemon
    
    const {title} = route.params;

    useEffect(() => {
        dispatch(getTargetPockemonRequest(title));
    }, [])

    return (
        <TargetPockemonComponent targetPockemon={data} navigation={navigation}/>
    )
}
