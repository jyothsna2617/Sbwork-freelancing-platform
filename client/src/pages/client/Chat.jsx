import { useParams } from "react-router-dom";
import ChatBox from "../../components/ChatBox";
import { useGeneral } from "../../context/GeneralContext";

const ClientChat = () => {
  const { freelancerId } = useParams();   // ✅ FIXED
  const { user } = useGeneral();

  if (!freelancerId || !user?.id) {
    return <div>Loading chat...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <ChatBox
        clientId={user.id}         // logged client
        freelancerId={freelancerId} // URL freelancer
      />
    </div>
  );
};

export default ClientChat;