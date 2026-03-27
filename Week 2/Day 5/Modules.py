import urllib.request
import time

def measure_load_time(url):
    try:
        start_time = time.time()  # start timer
        
        response = urllib.request.urlopen(url)
        response.read()  # ensure full response is received
        
        end_time = time.time()  # end timer
        
        load_time = end_time - start_time
        
        return f"{url} loaded in {load_time:.4f} seconds"
    
    except Exception as e:
        return f"Error loading {url}: {e}"


# Test with multiple websites
websites = [
    "https://www.google.com",
    "https://www.ynet.co.il",
    "https://www.imdb.com"
]

for site in websites:
    print(measure_load_time(site))