import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';

interface Props{
    activity:Activity| undefined
    closeForm:() =>void;
}
export default function ActivityForm({activity: selectedActivity, closeForm}:Props){
    let initialState:Activity;
    if(selectedActivity)
        initialState = selectedActivity;
    else{
        initialState = {
            id: '',
            title: '',
            date: '',
            category: '',
            description: '',
            city: '',
            venue: '',
        };
    }
    
    const [activity, setActivity] = useState(initialState);
    function handleSubmit(){
        console.log(activity);
    }
    function handleInputChange(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const{name,value}=event.target;
        setActivity({...activity,[name]:value})
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange}></Form.Input>
                <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange}></Form.TextArea>
                <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Date" value={activity.date} onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="City" value={activity.city} onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Venue"value={activity.venue} onChange={handleInputChange}></Form.Input>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    );
}
