import random

# Fix randomness for reproducibility
random.seed(42)

# --- Gene ---
class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.choice([0, 1])

    def mutate(self):
        self.value = 1 - self.value  # flip 0 ↔ 1

# --- Chromosome ---
class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def is_all_ones(self):
        return all(g.value == 1 for g in self.genes)

# --- DNA ---
class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            if random.random() < 0.5:
                chromosome.mutate()

    def is_perfect(self):
        return all(chrom.is_all_ones() for chrom in self.chromosomes)

# --- Organism ---
class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment  # mutation probability

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

# --- Simulation ---
def run_simulation(num_organisms=5, environment=0.7, max_generations=1000):
    organisms = [Organism(DNA(), environment) for _ in range(num_organisms)]

    for generation in range(1, max_generations + 1):
        for org in organisms:
            org.mutate()

            if org.dna.is_perfect():
                print(f"\nPerfect DNA found at generation {generation}!")
                return generation

    print("\nReached maximum generations without perfect DNA.")
    return -1

# --- Run Simulation ---
generations_needed = run_simulation()
print(f"Total generations: {generations_needed}")