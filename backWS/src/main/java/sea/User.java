package sea;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="ID")
    private Integer id;

    private String name;
    private String password;

    @ManyToMany
    @JoinTable(
        name="USERS_EVENTS",
        joinColumns=@JoinColumn(name="USER_ID", referencedColumnName="ID"),
        inverseJoinColumns=@JoinColumn(name="EVENT_ID", referencedColumnName="ID"))
    @JsonIgnoreProperties("users")
    private List<Event> events;
   

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword(){
		return password;
	}
	
	public void setPassword(String password){
		this.password=password;
	}
	
	public void addEvent(Event event){
		if(events == null)events = new ArrayList<Event>();
		this.events.add(event);
	}

	
    public List<Event> getEvents() { return events; }

}