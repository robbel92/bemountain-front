# Mountain Routes App

## Data layer

### Data (Redux Store)

- **Collection of MountainRoutes** (Slice: MountainRoutes)
  - MountainRoute:
    - id: string
    - name: string
    - author: string
    - description: string
    - difficulty: string
    - distance: number
    - ubication: string
    - photo: string
    - elevationGain: number
- **User** (Slice: User)
- **UI State** (Slice: UI)
- **Feedback** (Slice: Feedback) // no lo se preguntar

### Actions

- addRoute()
- removeRoute()
- updateRoute()
- loadRoutes()
- filterRoutes()
- loginUser()
- logoutUser()
- provideFeedback()
- showLoader()
- hideLoader()
- openModal()
- closeModal()

## API Operations (Custom Hooks)

- useRoutes() – Including getRoutes(),getRouteById() addRoute(), updateRoute(), removeRoute()
- useUser() – Including loginUser()
- useToken() - getDataToken()
- useLocalStorage() - setToken() , getToken() , removeToken()

## Components (Using React Router DOM for routing)

### App

- Receives a dispatch action
- Check if there is token in localStorage with getToken() action
- If a token exist navigate to RoutesList Page else navigate to Login page
- Renders Layout component

### Header

- Renders a nav bar component
- Show a logo

## NavBar

- Show a logout button and create navLink
- Create logoutActionOnclick to call logoutUser() and removeToken() from useToken custom hook
- Pass the logoutActionOnclick to logout Button

### LoginPage

- Renders LoginForm
- Receives a dispatch
- Create a handleOnSubmit(receives userCredentials from own state Login form) function to call loginUser(receive userCredentials from handleOnsubmit) from useUser customhook, extract data token with getDataToken() from useToken custom hook, dispatch loginUserActionCreator with extracted data,and calls setToken() from useLocalStorage custom hook and navigate to RoutesListPage

### LoginForm

- Have a own state.
- Receives a handleOnSubmit action
- Create a functionOnHandleOnSubmit, calls event.prevent.default(), calls handleOnsubmit(userCredentials) and reset UserCredentials
- Shows inputs for username and password.
- Show a button LOG IN

### CreateFormPage

- Renders a form component
- Receives a dispatch
- Create a handleOnSubmit( receives route data from form state) function , call a addRoute(receives route from handleOnSubmit) from useRoutes customHook, dispatch addRouteActionCreator(route data from handleOnsubmit) and navigate to RoutesListPage

### UpdateFormPage

- Renders a form component receives a routeData props
- Receives a dispatch
- Create a handleOnSubmit( receives route data from form state) function , call a updateRoute(receives route from handleOnSubmit) from useRoutes customHook, dispatch updateRouteActionCreator(route data from handleOnsubmit) and navigate to RoutesListPage

### Form

- Have a own state.
- Receives for props , text for button , optional RouteData and actionOnSubmit.
- If receives a RouteData from props , set ownState propierties from routeData props
- Shows inputs fields for the name, author, description, difficulty, distance, ubication, photo, and elevation gain of the Route.
- Show a button component

### RoutesListPage

- Receives dispatch
- Call getRoutes() from useRoutes custom hook and dispatch loadRoutesActionCreator()
- Receives a collection of Routes from store with useAppSelector(state)
- Render RoutesList

### RoutesList

- Receives a collection of Routes from props
- Renders as many RoutesCARDS as routes are in the collection received
- Create a deleteActionOnClick(recevies an Id) function who calls removeRoute(receives id) from useRoutes custom hook, and removeRouteActionCreator(id)
- Create a detailsActionOnSubmit(id) woh navigate to detailsPage
  ///mira lo de la action de edit

### RouteCard

- Recevies a Route data from props, recevies a deleteActionOnSubmit(id) to delete button, receives a detailsActionOnSubmit(id)

- Show image, name , ubication , distance route data.

- Show a delete Button and edit button

///mira lo de la action de edit

### DetailRoutePage

- Call getRouteById from useRoutes custom hook to catch a route.
- Create editActionOnclick who navigates to updateFormPage(route)
- Shows name, author, description, difficulty, distance, ubication, photo, and elevation gain
- Show edit button

### Button

- Receives an ActionOnClick
- Receives a text/icon
- Shows a button with de receives text/icon
