import time
import copy

class GameOfLife:
    def __init__(self, rows, cols, initial_grid):
        self.rows = rows
        self.cols = cols
        self.grid = initial_grid

    def display(self):
        for row in self.grid:
            print(" ".join(["⬛" if cell == 1 else "⬜" for cell in row]))
        print("\n" + "-" * 20)

    def count_neighbors(self, r, c):
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),          (0, 1),
            (1, -1), (1, 0),  (1, 1)
        ]

        count = 0
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < self.rows and 0 <= nc < self.cols:
                count += self.grid[nr][nc]
        return count

    def next_generation(self):
        new_grid = copy.deepcopy(self.grid)

        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.count_neighbors(r, c)

                if self.grid[r][c] == 1:
                    # Rules for live cells
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_grid[r][c] = 0
                else:
                    # Rule for dead cells
                    if live_neighbors == 3:
                        new_grid[r][c] = 1

        self.grid = new_grid

    def run(self, generations, delay=1):
        for gen in range(generations):
            print(f"Generation {gen + 1}")
            self.display()
            self.next_generation()
            time.sleep(delay)


# ===== TESTING =====

# Initial state (Glider pattern)
initial_grid = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

game = GameOfLife(5, 5, initial_grid)
game.run(5, delay=0)