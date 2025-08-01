package common

// ObjectType represents the type of data object
type ObjectType string

// Object types supported by cmskit.
const (
	ObjectTypeCollection ObjectType = "collection"
	ObjectTypePage       ObjectType = "page"
	ObjectTypeBlock      ObjectType = "block"
	ObjectTypeComment    ObjectType = "comment"
	ObjectTypeUser       ObjectType = "user"
	ObjectTypeFile       ObjectType = "file"
	ObjectTypeWorkspace  ObjectType = "workspace"
	ObjectTypeProperty   ObjectType = "property"
	ObjectTypeRelation   ObjectType = "relation"
	ObjectTypeGeneric    ObjectType = "generic"
)

// ObjectTypes is a list of all object types supported by cmskit.
var ObjectTypes = []ObjectType{
	ObjectTypeCollection,
	ObjectTypePage,
	ObjectTypeBlock,
	ObjectTypeComment,
	ObjectTypeUser,
	ObjectTypeFile,
	ObjectTypeWorkspace,
	ObjectTypeProperty,
	ObjectTypeRelation,
	ObjectTypeGeneric,
}
