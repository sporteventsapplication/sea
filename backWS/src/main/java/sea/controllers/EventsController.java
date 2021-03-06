package sea.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import sea.handlers.EventRepository;
import sea.handlers.UserRepository;
import sea.models.Event;
import sea.models.EventUsers;
import sea.models.User;

@CrossOrigin(origins = "http://localhost:4200")
@Controller // This means that this class is a Controller
@RequestMapping(path = "/sea/events") // This means URL's start with /demo
										// (after Application path)
public class EventsController {
	@Autowired // This means to get the bean called userRepository
	// Which is auto-generated by Spring, we will use it to handle the data
	private UserRepository userRepository;

	@Autowired // This means to get the bean called userRepository
	// Which is auto-generated by Spring, we will use it to handle the data
	private EventRepository eventRepository;

	@GetMapping(path = "")
	@PreAuthorize("hasAuthority('ADMIN_USER') or hasAuthority('STANDARD_USER')")
	public @ResponseBody Iterable<Event> getAllEvents() {
		// This returns a JSON or XML with the users
		return eventRepository.findAll();
	}

	@GetMapping(path = "/{id}")
	public @ResponseBody Event getEventByID(@PathVariable int id) {
		// This returns a JSON or XML with the users
		return eventRepository.findById(id).get();
	}

	@PostMapping(path = "")
	public @ResponseBody Event createEvent(@RequestBody Event event) {
		// This returns a JSON or XML with the users
		return eventRepository.save(event);
	}

	@PutMapping(path = "/{id}")
	public @ResponseBody Event updateEventByID(@RequestBody Event event) {
		// This returns a JSON or XML with the users
		return eventRepository.save(event);
	}

	@DeleteMapping(path = "/{id}")
	public @ResponseBody String deleteEventByID(@PathVariable int id) {
		// This returns a JSON or XML with the users
		try {
			eventRepository.deleteById(id);
		} catch (IllegalArgumentException err) {
			return "NOK";
		}
		return "OK";
	}

	@GetMapping(path = "/{id}/participants")
	public @ResponseBody EventUsers getUsersOfEvent(@PathVariable int id) {
		//EventUsers evU = new EventUsers(userRepository, eventRepository, id);
		List<User>participants = eventRepository.findById(id).get().getUsers();

		// Recupere les ID des participants
		List<Integer> parInt = new ArrayList<Integer>();
		participants.forEach(new Consumer<User>() {

			@Override
			public void accept(User u) {
				parInt.add(u.getId());
			}
		});

		List<User>noparticipants = new ArrayList<User>();

		userRepository.findAll().forEach(new Consumer<User>() {

			@Override
			public void accept(User u) {
				if (!parInt.contains(u.getId())) {
					noparticipants.add(u);
				}

			}
		});
		
		EventUsers evU = new EventUsers();
		evU.setParticipants(participants);
		evU.setNoparticipants(noparticipants);
		return evU;
	}

}
