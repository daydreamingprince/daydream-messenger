interface IParams {
  conversationId: string;
};

const ConversationId = async ({ params }: { params: IParams }) => {
  return (
    <div>
      Daydream Conversation ID
    </div>
  )
};

export default ConversationId;