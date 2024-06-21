import requests

url = "https://rickandmortyapi.com/api/episode"
all_episodes = []

while url:
    response = requests.get(url)
    data = response.json()
    all_episodes.extend(data['results'])
    url = data['info']['next']

# Now all_episodes has all the episodes
print(all_episodes)
