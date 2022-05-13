## event emitter 

## Using event emitter in react frontend

**Event emitter is a popular library from node.js**

**Event Emitter is useful library in React apps, by using event emitter in react, you can** 

- **Sharing state/data with distant component**
- **Sending state/parameter/data  to ancestor component**
- **passing state/parameter/data to descendant components**

<aside>
📌 Don’t forget to remove listeners of Event Emitter at the end of lifecycle of components.

</aside>

Clean up Event Emitter listener after the lifesycle:

- In compomentWillUnmount clean up Event Emitter listener:
    
    ```jsx
    compomentWillUnmount(){
       emitter.off(event);
    };
    ```
    
- In useeffect(), clean up Event Emitter listener(function component only):
    
    ```jsx
    useEffect(() => {
    	emitter.on(event,listener);
    	return () => {
    		emitter.off(event) //remove listener here
    	}
    });
    ```
    
### ref
[EventEmitter instead of lifting state up](https://medium.com/@krzakmarek88/eventemitter-instead-of-lifting-state-up-f5f105054a5)
