from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__, url_prefix = '/api/v0' )

from . import toposort


@api.route('/orderDependenciesList', methods=['POST'])
def dependenciesView():
	data = request.get_json()
	#entryPoints = set(map((lambda strInt: int(strInt)), data.values()))
	entryPoints = list(set(map((lambda strInt: int(strInt)), data['selected'] )))
	allDependencies = list(map((lambda item: item['_dependencies']),data['allDependencies']))

	ordered = toposort.sort(entryPoints, allDependencies, len(allDependencies))

	return jsonify({"ordered": ordered })