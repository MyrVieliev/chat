import React from 'react';
import Chatitem from './ChatItem';

const Chatlist = ({ messages, removeMessage }) => {
	return (
		<div className='chat-container'>
			{messages.map((message) => (
				<Chatitem
					key={message.id}
					message={message}
					removeMessage={removeMessage}
				/>
			))}
		</div>
	);
};

export default Chatlist;
