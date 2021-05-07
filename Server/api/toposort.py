import numpy as np
from numba import jit, njit
from numba.typed import List


def dfs(at:int, visitedVertices, visited, Graph):
	visited[at] = True
	for neighbour in Graph[at]:
		if not visited[neighbour]:
			dfs(neighbour, visitedVertices, visited, Graph)
	visitedVertices.append(at)



def toposort(order, entryNodes, Graph, vertices:np.int64):

	visited = np.zeros((vertices), bool)

	orderIndex = 0

	for node in entryNodes:
		if not visited[node]:
			visitedVertices = List()
			dfs(node, visitedVertices, visited, Graph)
			for visitedVertex in visitedVertices:
				order[orderIndex] = visitedVertex
				orderIndex+=1


def sort(entryNodes, Graph, vertices):
	Graph = np.array(Graph, dtype=object)
	order = np.full(vertices, -1, dtype=np.int64)
	toposort(order, entryNodes, Graph, vertices)
	order = list(map((lambda item: int(item)),filter((lambda item: not item==-1),order)))
	return order


