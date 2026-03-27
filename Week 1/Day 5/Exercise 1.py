# Simple 2-player Tic Tac Toe game in Python

def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board, player):
    # Check rows, columns, diagonals
    for i in range(3):
        if all(board[i][j] == player for j in range(3)):
            return True
        if all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2-i] == player for i in range(3)):
        return True
    return False

def is_draw(board):
    return all(cell != " " for row in board for cell in row)

def main():
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    turn = 0
    
    print("Welcome to Tic Tac Toe!")
    print_board(board)
    
    while True:
        player = players[turn % 2]
        print(f"Player {player}'s turn.")
        try:
            row = int(input("Enter row (0-2): "))
            col = int(input("Enter column (0-2): "))
        except ValueError:
            print("Please enter valid integers for row and column.")
            continue
        
        if row not in range(3) or col not in range(3):
            print("Row and column must be between 0 and 2.")
            continue
        if board[row][col] != " ":
            print("Cell already taken. Choose another.")
            continue
        
        board[row][col] = player
        print_board(board)
        
        if check_winner(board, player):
            print(f"Player {player} wins!")
            break
        if is_draw(board):
            print("It's a draw!")
            break
        
        turn += 1
         
    #Run the game
    main()

         

