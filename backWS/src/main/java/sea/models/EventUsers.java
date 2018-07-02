package sea.models;

import java.util.List;

public class EventUsers {
	List<User> participants;
	List<User> noparticipants;

	public List<User> getParticipants() {
		return participants;
	}

	public void setParticipants(List<User> participants) {
		this.participants = participants;
	}

	public List<User> getNoparticipants() {
		return noparticipants;
	}

	public void setNoparticipants(List<User> noparticipants) {
		this.noparticipants = noparticipants;
	}
	
	
	
}
