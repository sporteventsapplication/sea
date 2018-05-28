package sea.models;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import sea.handlers.EventRepository;
import sea.handlers.UserRepository;

public class EventUsers {
	List<User> participants;
	List<User> noparticipants;

	public EventUsers(UserRepository userRepository, EventRepository eventRepository, int eventId) {
		participants = eventRepository.findById(eventId).get().getUsers();

		// Recupere les ID des participants
		List<Integer> parInt = new ArrayList<Integer>();
		participants.forEach(new Consumer<User>() {

			@Override
			public void accept(User u) {
				parInt.add(u.getId());
			}
		});

		noparticipants = new ArrayList<User>();

		userRepository.findAll().forEach(new Consumer<User>() {

			@Override
			public void accept(User u) {
				if (!parInt.contains(u.getId())) {
					noparticipants.add(u);
				}

			}
		});
	}

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
