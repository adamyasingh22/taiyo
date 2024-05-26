import { Tag } from '../../atoms/tag';
import { Button } from '../button';
import { useDispatch } from 'react-redux';
import { remove } from '../../../redux/contactSlice';
import { redirect, useNavigate } from 'react-router-dom';

type ContactViewProps = {
    firstName: string,
    lastName: string,
    id?: string
}

export const ContactView = (props: ContactViewProps) => {
    const {firstName, lastName, id} =  props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteContact = () => {
        !!id && dispatch(remove(id));
    }

    const editContact = () => {
        !!id && navigate(`/edit/${id}`);
    }

    return (
        <div className='flex flex-col items-center bg-slate-100 rounded p-4 shadow-md space-y-4'>
            <div className='h-24 w-full bg-slate-500'></div>
            <div className='flex space-x-2'>
                <Tag text={firstName} />
                <Tag text={lastName} />
            </div>
            <div className='space-x-2'>
                <Button title='Edit' onPress={() => editContact()} />
                <Button title='Delete' onPress={() => deleteContact()} />
            </div>
        </div>
    );
}
