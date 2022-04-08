# Set Up (before running)
1. Create a `.env` file in the `hello-react-classes` directory
2. Add this to that file while using your own `clientSideID`:

`REACT_APP_LD_CLIENT_SIDE_ID=<your clientSideID>`

3. In LaunchDarkly, create a new JSON feature flag with the key `cities-flag`. Add the following five variations:

- Variation 1 <br>
Name: Kansas City, Chicago, Denver<br>
Description: Kansas City, Chicago, Denver<br>
Value:

```json
{
  "cities": [
    "Kansas City",
    "Chicago",
    "Denver"
  ]
}
```

- Variation 2<br>
Name: Miami, Austin, New York<br>
Description: Miami, Austin, New York<br>
Value:

```json
{
  "cities": [
    "Miami",
    "Austin",
    "New York"
  ]
}
```

- Variation 3<br>
Name: Tampa, Atlanta, Los Angeles<br>
Description: Tampa, Atlanta, Los Angeles<br>
Value: 

```json
{
  "cities": [
    "Tampa",
    "Atlanta",
    "Los Angeles"
  ]
}
```

- Variation 4<br>
Name: Lincoln, Des Moines, New Orleans<br>
Description: Lincoln, Des Moines, New Orleans<br>
Value: 

```json
{
  "cities": [
    "Lincoln",
    "Des Moines",
    "New Orleans"
  ]
}
```

- Variation 5<br>
Name: Empty list of cities<br>
Description: Empty list of cities<br>
Value: 

```json
{
  "cities": []
}
```

4. Run `npm install` in the root dir of this repo
5. Run `npm run start` to run the app