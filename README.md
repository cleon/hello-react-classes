# Set Up (before running)
1. Create a .env.local file in the hello-react-classes dir
2. Add this to that file while using your own clientSideID:

REACT_APP_LD_CLIENT_SIDE_ID=<your clientSideID>

3. In LaunchDarkly, create a new JSON feature flag with the key 'cities-flag'. Add the following five variations:

- Variation 1
Name: Kansas City, Chicago, Denver
Description: Kansas City, Chicago, Denver
Value: 
{
  "cities": [
    "Kansas City",
    "Chicago",
    "Denver"
  ]
}

- Variation 2
Name: Miami, Austin, New York
Description: Miami, Austin, New York
Value: 
{
  "cities": [
    "Miami",
    "Austin",
    "New York"
  ]
}

- Variation 3
Name: Tampa, Atlanta, Los Angeles
Description: Tampa, Atlanta, Los Angeles
Value: 
{
  "cities": [
    "Tampa",
    "Atlanta",
    "Los Angeles"
  ]
}

- Variation 4
Name: Lincoln, Des Moines, New Orleans
Description: Lincoln, Des Moines, New Orleans
Value: 
{
  "cities": [
    "Lincoln",
    "Des Moines",
    "New Orleans"
  ]
}

- Variation 5
Name: Empty list of cities
Description: Empty list of cities
Value: 
{
  "cities": []
}

4. Run `npm install` in the root dir of this repo

5. Run `npm run start` to run the app